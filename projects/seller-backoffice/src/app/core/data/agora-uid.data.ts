import { Injectable } from "@angular/core";
import { StreamService } from "@seller-backoffice-core/services/stream.service";

@Injectable({
    providedIn: StreamService
})
export class AgoraUidStorage {
    private static readonly PREFIX = 'mainstream_agora_uid';

  private static buildKey(eventUuid: string, role: 'host' | 'audience'): string {
    return `${this.PREFIX}:${eventUuid}:${role}`;
  }

  static get(eventUuid: string, role: 'host' | 'audience'): string | null {
    const value = localStorage.getItem(
      this.buildKey(eventUuid, role)
    );

    return value ?? null;
  }

  static set(
    eventUuid: string,
    role: 'host' | 'audience',
    uid: string
  ): void {
    localStorage.setItem(
      this.buildKey(eventUuid, role),
      uid.toString()
    );
  }

  static remove(eventUuid: string, role: 'host' | 'audience'): void {
    localStorage.removeItem(
      this.buildKey(eventUuid, role)
    );
  }

  static clearAll(): void {
    Object.keys(localStorage)
      .filter(key => key.startsWith(this.PREFIX))
      .forEach(key => localStorage.removeItem(key));
  }
}