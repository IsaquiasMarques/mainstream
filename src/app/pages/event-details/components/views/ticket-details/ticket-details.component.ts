import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-details',
  imports: [],
  template: `
    <div class="section-content">
      <div class="limited-container py-16">
        <div class="details-boxes flex flex-wrap gap-7 justify-center items-stretch">

          <div class="box w-full lg:w-[308px] flex flex-col gap-7 p-7 rounded-lg border-[0.5px] border-(color:--secondary)/70">
            <h1 class="!font-[Montserrat] font-semibold text-lg text-(color:--secondary)/70 leading-[120%] -tracking-[2%]">
              Organização do Evento
            </h1>
            <div class="details-content flex flex-col gap-3">
              <div class="date flex gap-2 justify-start items-center">
                <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_767_3082)">
                  <circle cx="15.5" cy="15" r="14.5" stroke="#FFC4C4"/>
                  <path d="M9.32405 21.928C9.30805 21.928 9.30805 21.928 9.29205 21.928C9.08405 21.912 8.94005 21.736 8.95605 21.544C9.16405 18.488 12.044 16.104 15.5 16.104C18.956 16.104 21.836 18.488 22.044 21.528C22.06 21.736 21.9 21.896 21.708 21.912C21.5 21.928 21.34 21.768 21.324 21.576C21.132 18.904 18.572 16.824 15.5 16.824C12.412 16.824 9.85205 18.92 9.67605 21.592C9.66005 21.784 9.50005 21.928 9.32405 21.928Z" fill="#F20530"/>
                  <path d="M15.5001 15.368C13.4841 15.368 11.8521 13.736 11.8521 11.72C11.8521 9.70399 13.4841 8.07199 15.5001 8.07199C17.5161 8.07199 19.1481 9.70399 19.1481 11.72C19.1481 13.736 17.5161 15.368 15.5001 15.368ZM15.5001 8.80799C13.9001 8.80799 12.5881 10.12 12.5881 11.72C12.5881 13.32 13.9001 14.632 15.5001 14.632C17.1001 14.632 18.4121 13.32 18.4121 11.72C18.4121 10.12 17.1001 8.80799 15.5001 8.80799Z" fill="#F20530"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_767_3082">
                  <rect width="30" height="30" fill="white" transform="translate(0.5)"/>
                  </clipPath>
                  </defs>
                </svg>
                <p class="!font-['Montserrat'] leading-[120%] text-(color:--secondary)/70 tracking-[-2%]">Nome da Organização</p>
              </div>
              <div class="location flex gap-2 justify-start items-center">
                <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="15.5" cy="15" r="14.5" stroke="#FFC4C4"/>
                  <path d="M18.7704 17.0576C18.5041 16.7803 18.1829 16.6321 17.8425 16.6321C17.5048 16.6321 17.1809 16.7776 16.9036 17.0548L16.0361 17.9196C15.9647 17.8812 15.8934 17.8455 15.8247 17.8098C15.7259 17.7604 15.6326 17.7137 15.5529 17.6643C14.7403 17.1482 14.0019 16.4756 13.2936 15.6053C12.9504 15.1716 12.7198 14.8064 12.5524 14.4358C12.7775 14.2299 12.9861 14.0158 13.1893 13.8099C13.2661 13.733 13.343 13.6534 13.4199 13.5766C13.9964 13 13.9964 12.2533 13.4199 11.6768L12.6704 10.9274C12.5853 10.8423 12.4974 10.7544 12.4151 10.6666C12.2504 10.4964 12.0774 10.3207 11.899 10.1559C11.6327 9.89239 11.3142 9.75238 10.9793 9.75238C10.6444 9.75238 10.3204 9.89239 10.0459 10.1559C10.0432 10.1587 10.0432 10.1587 10.0404 10.1614L9.10702 11.1031C8.75563 11.4545 8.55522 11.8827 8.5113 12.3796C8.44541 13.1812 8.6815 13.928 8.86269 14.4166C9.30743 15.6163 9.97179 16.7281 10.9628 17.9196C12.1653 19.3554 13.612 20.4892 15.2647 21.2881C15.8961 21.5873 16.7389 21.9414 17.6805 22.0018C17.7382 22.0046 17.7986 22.0073 17.8535 22.0073C18.4876 22.0073 19.0202 21.7795 19.4375 21.3265C19.4403 21.321 19.4458 21.3183 19.4485 21.3128C19.5913 21.1398 19.756 20.9833 19.9289 20.8159C20.047 20.7033 20.1678 20.5853 20.2858 20.4617C20.5576 20.179 20.7003 19.8495 20.7003 19.5119C20.7003 19.1714 20.5548 18.8448 20.2776 18.5702L18.7704 17.0576ZM19.7532 19.9484C19.7505 19.9484 19.7505 19.9511 19.7532 19.9484C19.6462 20.0637 19.5363 20.168 19.4183 20.2833C19.2399 20.4535 19.0587 20.6319 18.8885 20.8323C18.6112 21.1288 18.2845 21.2688 17.8562 21.2688C17.8151 21.2688 17.7711 21.2688 17.73 21.2661C16.9146 21.2139 16.1569 20.8955 15.5886 20.6237C14.0348 19.8715 12.6704 18.8036 11.5366 17.4502C10.6005 16.3218 9.97453 15.2786 9.55999 14.1586C9.30468 13.475 9.21134 12.9424 9.25252 12.44C9.27998 12.1188 9.40351 11.8525 9.63137 11.6247L10.5675 10.6885C10.702 10.5622 10.8448 10.4936 10.9848 10.4936C11.1577 10.4936 11.2978 10.5979 11.3856 10.6858C11.3884 10.6885 11.3911 10.6913 11.3938 10.694C11.5613 10.8505 11.7205 11.0125 11.888 11.1854C11.9731 11.2733 12.0609 11.3611 12.1488 11.4517L12.8983 12.2012C13.1893 12.4922 13.1893 12.7612 12.8983 13.0522C12.8186 13.1318 12.7418 13.2114 12.6622 13.2883C12.4316 13.5244 12.2119 13.744 11.9731 13.9582C11.9676 13.9636 11.9621 13.9664 11.9594 13.9719C11.7233 14.208 11.7672 14.4386 11.8166 14.5951C11.8194 14.6033 11.8221 14.6115 11.8249 14.6198C12.0198 15.092 12.2943 15.5367 12.7116 16.0665L12.7143 16.0693C13.472 17.0027 14.2709 17.7302 15.1521 18.2875C15.2647 18.3588 15.38 18.4165 15.4898 18.4714C15.5886 18.5208 15.682 18.5675 15.7616 18.6169C15.7726 18.6224 15.7835 18.6306 15.7945 18.6361C15.8879 18.6828 15.9757 18.7047 16.0663 18.7047C16.2942 18.7047 16.4369 18.562 16.4836 18.5153L17.4225 17.5764C17.5158 17.4831 17.6641 17.3705 17.837 17.3705C18.0072 17.3705 18.1472 17.4776 18.2323 17.5709C18.2351 17.5737 18.2351 17.5737 18.2378 17.5764L19.7505 19.0891C20.0332 19.3691 20.0332 19.6574 19.7532 19.9484Z" fill="#F20530"/>
                  <path d="M15.5199 12.0941C16.2392 12.2149 16.8925 12.5553 17.4142 13.0769C17.9358 13.5985 18.2734 14.2519 18.397 14.9711C18.4272 15.1523 18.5836 15.2786 18.7621 15.2786C18.784 15.2786 18.8033 15.2759 18.8252 15.2731C19.0284 15.2402 19.1629 15.048 19.13 14.8449C18.9817 13.9746 18.5699 13.1812 17.9412 12.5526C17.3126 11.9239 16.5192 11.5121 15.6489 11.3638C15.4458 11.3309 15.2564 11.4654 15.2207 11.6658C15.185 11.8662 15.3168 12.0612 15.5199 12.0941Z" fill="#F20530"/>
                  <path d="M21.4827 14.7378C21.2384 13.3048 20.563 12.0008 19.5253 10.963C18.4876 9.92532 17.1836 9.24998 15.7505 9.00565C15.5501 8.96996 15.3607 9.10723 15.325 9.30763C15.2921 9.51078 15.4266 9.70021 15.6298 9.7359C16.9091 9.95277 18.0758 10.5595 19.0037 11.4846C19.9316 12.4125 20.5356 13.5793 20.7524 14.8586C20.7826 15.0398 20.9391 15.1661 21.1176 15.1661C21.1395 15.1661 21.1588 15.1633 21.1807 15.1606C21.3811 15.1304 21.5184 14.9382 21.4827 14.7378Z" fill="#F20530"/>
                </svg>               
                <p class="!font-['Montserrat'] leading-[120%] text-(color:--secondary)/70 tracking-[-2%]">900 000 000</p>
              </div>
            </div>
          </div>
          <div class="box w-full lg:w-[308px] flex flex-col gap-7 p-7 rounded-lg border-[0.5px] border-(color:--secondary)/70">
            <h1 class="!font-[Montserrat] font-semibold text-lg text-(color:--secondary)/70 leading-[120%] -tracking-[2%]">
              Detalhes do Bilhete Normal
            </h1>
            <div class="details-content flex flex-col gap-3">
              <div class="date flex gap-2 justify-start items-center">
                <p class="!font-['Montserrat'] leading-[120%] text-(color:--secondary)/70 tracking-[-2%]">20 de Agosto pelas 19h</p>
              </div>
              <div class="location flex gap-2 justify-start items-center">            
                <p class="!font-['Montserrat'] leading-[120%] text-(color:--secondary)/70 tracking-[-2%]">20 de Agosto pelas 19h</p>
              </div>
              <div class="location flex gap-2 justify-start items-center">            
                <p class="!font-['Montserrat'] leading-[120%] text-(color:--secondary)/70 tracking-[-2%]">Luanda, Angola</p>
              </div>
            </div>
          </div>
          <div class="box w-full lg:w-[308px] flex flex-col gap-7 p-7 rounded-lg border-[0.5px] border-(color:--secondary)/70">
            <h1 class="!font-[Montserrat] font-semibold text-lg text-(color:--secondary)/70 leading-[120%] -tracking-[2%]">
              Detalhes do Bilhete VIP
            </h1>
            <div class="details-content flex flex-col gap-3">
              <div class="date flex gap-2 justify-start items-center">
                <p class="!font-['Montserrat'] leading-[120%] text-(color:--secondary)/70 tracking-[-2%]">20 de Agosto pelas 19h</p>
              </div>
              <div class="location flex gap-2 justify-start items-center">            
                <p class="!font-['Montserrat'] leading-[120%] text-(color:--secondary)/70 tracking-[-2%]">20 de Agosto pelas 19h</p>
              </div>
              <div class="location flex gap-2 justify-start items-center">            
                <p class="!font-['Montserrat'] leading-[120%] text-(color:--secondary)/70 tracking-[-2%]">Luanda, Angola</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class TicketDetailsComponent {

}
