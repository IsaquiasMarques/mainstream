import { DecimalPipe } from '@angular/common';
import { HttpStatusCode } from '@angular/common/http';
import { Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AgoraIOService } from '@seller-backoffice-core/services/agora.service';
import { StreamStats } from '@seller-backoffice-core/services/stream-stats.service';
import { StreamService } from '@seller-backoffice-core/services/stream.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-streaming',
  imports: [ DecimalPipe ],
  template: `
    @if(!notFound()){
      
      <div class="max-w-full mx-auto p-4 lg:p-6 h-[calc(100vh-100px)] lg:h-[calc(140vh-100px)]">
        <div class="grid grid-cols-12 gap-6 h-full">
          
          <!-- LADO ESQUERDO: MONITOR DE VÍDEO (8 Colunas) -->
          <div class="col-span-12 lg:col-span-12 flex flex-col gap-4">
            
            <!-- HEADER DO STUDIO -->
            <div class="flex justify-between items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
              <div class="flex items-center gap-4">
                <div class="bg-(--primary)/10 p-2 rounded-lg">
                  <span class="text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-video"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20.117 7.625a1 1 0 0 0 -.564 .1l-4.553 2.275v4l4.553 2.275a1 1 0 0 0 1.447 -.892v-6.766a1 1 0 0 0 -.883 -.992z" /><path d="M5 5c-1.645 0 -3 1.355 -3 3v8c0 1.645 1.355 3 3 3h8c1.645 0 3 -1.355 3 -3v-8c0 -1.645 -1.355 -3 -3 -3z" /></svg>
                  </span>
                </div>
                <div>
                  <h2 class="text-sm font-black text-gray-900 uppercase tracking-tighter">Live: {{ eventInLive()[0].title }}</h2>
                  <p class="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{{ eventInLive()[0].location.name }}</p>
                </div>
              </div>

              <div class="flex items-center gap-6">
                <div class="flex flex-col items-end">
                  <span class="text-[10px] font-bold text-gray-400 uppercase">Duração</span>
                  <span class="text-sm font-mono font-bold" [class.text-(--primary)]="isPublishing()">{{ duration() }}</span>
                </div>
                <div class="h-8 w-[1px] bg-gray-100"></div>
                <div class="flex flex-col items-end">
                  <span class="text-[10px] font-bold text-gray-400 uppercase">Espectadores</span>
                  <span class="text-sm font-bold">{{ activeUsers() | number }}</span>
                </div>
              </div>
            </div>

            <!-- PLAYER DE PREVIEW (Onde o Host se vê) -->
            <div class="relative flex-1 bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
              
              <div id="local-player" class="w-full h-full object-cover"></div>

              <!-- MENSAGEM SE CÂMERA DESLIGADA -->
               @if(!isCamOn()){
                 <div class="absolute inset-0 bg-black flex flex-col items-center justify-center z-10">
                   <span class="text-4xl mb-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-camera-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.297 4.289a.997 .997 0 0 1 .703 -.289h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v8m-1.187 2.828c-.249 .11 -.524 .172 -.813 .172h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1c.298 0 .58 -.065 .834 -.181" /><path d="M10.422 10.448a3 3 0 1 0 4.15 4.098" /><path d="M3 3l18 18" /></svg>
                   </span>
                   <p class="text-white font-bold">Sua câmera está desligada</p>
                 </div>
               }

              <!-- OVERLAY DE STATUS -->
              <div class="absolute top-6 left-6 flex gap-3">
                @if(isPublishing()){
                  <span class="bg-(--primary) text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-xl animate-pulse">
                    ON AIR / AO VIVO
                  </span>
                } @else {
                  <span class="bg-gray-700 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-xl">
                    PREVIEW MODE
                  </span>
                }
              </div>
            </div>

            <!-- BARRA DE FERRAMENTAS DO HOST (CONTROLES) -->
            <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl flex items-center justify-between">
              <div class="flex items-center gap-3">
                <!-- Botão Mic -->
                <button (click)="toggleMic()" 
                  [class.bg-gray-100]="isMicOn()" [class.bg-red-100]="!isMicOn()"
                  class="w-12 h-12 cursor-pointer rounded-2xl flex items-center justify-center transition-all hover:scale-105">
                  <span class="text-xl">
                    @if(isMicOn()){
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-microphone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z" /><path d="M5 10a7 7 0 0 0 14 0" /><path d="M8 21l8 0" /><path d="M12 17l0 4" /></svg>
                    } @else {
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-microphone-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3l18 18" /><path d="M9 5a3 3 0 0 1 6 0v5a3 3 0 0 1 -.13 .874m-2 2a3 3 0 0 1 -3.87 -2.872v-1" /><path d="M5 10a7 7 0 0 0 10.846 5.85m2 -2a6.967 6.967 0 0 0 1.152 -3.85" /><path d="M8 21l8 0" /><path d="M12 17l0 4" /></svg>
                    }
                  </span>
                </button>
                
                <!-- Botão Cam -->
                <button (click)="toggleCam()" 
                  [class.bg-gray-100]="isCamOn()" [class.bg-red-100]="!isCamOn()"
                  class="w-12 h-12 cursor-pointer rounded-2xl flex items-center justify-center transition-all hover:scale-105">
                  <span class="text-xl">
                    @if(isCamOn()){
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-video"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" /><path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /></svg>
                    } @else {
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-video-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3l18 18" /><path d="M15 11v-1l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -.675 .946" /><path d="M10 6h3a2 2 0 0 1 2 2v3m0 4v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h1" /></svg>
                    }
                  </span>
                </button>

              </div>

              <!-- BOTÃO PRINCIPAL: INICIAR / ENCERRAR -->
              <div class="flex items-center gap-4">
                @if(!isPublishing()){
                  <button (click)="startBroadcast()"
                    class="bg-(--primary) cursor-pointer hover:opacity-90 text-white font-black px-10 py-4 rounded-2xl shadow-lg shadow-(--primary)/30 transition-all flex items-center gap-3 uppercase text-sm tracking-widest">
                    <span class="w-3 h-3 bg-white rounded-full"></span>
                    Transmitir Agora
                  </button>
                } @else {
                  <button (click)="stopBroadcast()"
                    class="bg-gray-900 cursor-pointer hover:bg-black text-white font-black px-10 py-4 rounded-2xl shadow-xl transition-all flex items-center gap-3 uppercase text-sm tracking-widest">
                    <span class="w-3 h-3 bg-(--primary) rounded-full animate-ping"></span>
                    Encerrar Live
                  </button>
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    } @else {
      <p class="text-base text-black/70 text-center">
        You were not supposed to be here. Select an event to start the live.
      </p>
    }
  `,
  styles: ``
})
export class StreamingPage implements OnInit, OnDestroy {
  private streamService = inject(StreamService);
  private agoraService = inject(AgoraIOService);
  private router = inject(Router);
  eventInLive = computed(() => this.streamService.eventInLive());
  notFound = signal<boolean>(true);
  isClosing = signal<boolean>(false);

  isMicOn = computed(() => this.agoraService.isMicOn());
  isCamOn = computed(() => this.agoraService.isCamOn());
  isPublishing = computed(() => this.agoraService.isPublishing());
  duration = computed(() => this.agoraService.duration());

  activeUsers = computed(() => this.agoraService.activeUsers());
  streamStats = inject(StreamStats);

  interval: any;

  ngOnInit(): void {
    if(!(this.streamService.eventInLive().length > 0)){
      this.notFound.set(true);
      return;
    }

    this.notFound.set(false);

    this.agoraService.startBroadcast();

    this.startUsersCounter(10);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  toggleCam(): void{
    this.agoraService.toggleCam();
  }

  toggleMic(): void{
    this.agoraService.toggleMic();
  }

  startUsersCounter(intervalInSeconds: number): void{
    this.interval = setInterval(() => {
      this.streamStats.countUsers(this.streamService.eventInLive()[0].slug).pipe(take(1)).subscribe(response => this.agoraService.activeUsers.set(response.count))
    }, intervalInSeconds * 1000);
  }

  startBroadcast(): void{
    this.agoraService.startBroadcast();
  }

  stopBroadcast(): void{
    this.isClosing.set(true);
    this.streamService.end().pipe(take(1)).subscribe({
      next: response => {
        if(response.status === HttpStatusCode.Ok){
          this.agoraService.stopBroadcast();
        }
        this.router.navigate(['/my-account/events'])
        this.isClosing.set(false);
      },
      error: error => {}
    })
  }

}
