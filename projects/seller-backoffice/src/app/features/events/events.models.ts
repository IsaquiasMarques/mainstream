import { BaseEvent } from "@seller-backoffice-core/models/event.model";

export interface Event extends BaseEvent{};

export interface PaginatedEventResponse{
    data: Event[],
    current_page: number,
    first_page_url: string,
    from: number,
    to: number,
    last_page: number,
    last_page_url: string,
    links: PaginationLink[],
    next_page_url: string | null,
    total: number,
    path: string,
    per_page: number,
    prev_page_url: string | null,
}

interface PaginationLink{
    url: string,
    label: string,
    active: boolean
}