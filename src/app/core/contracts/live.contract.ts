import { Event } from "@core/models/event.model"

export interface IdentificateGuest{
    email: string
}

export interface JoinLiveEvent{
    email: string,
    event: string,
    previousUid: number | null
}

export type PaidEventsForIdentifiedGuests = Partial<Event>;

export interface LiveAccessResponse{
    app_id: string,
    token: string,
    channel: string,
    uid: string
}

export type AgoraUid = { agora_uid: number }