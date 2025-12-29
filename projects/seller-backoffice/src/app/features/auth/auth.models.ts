export interface RequestOTP{
    email: string
}

export interface LoginWithOTP{
    email: string,
    otp: string
}