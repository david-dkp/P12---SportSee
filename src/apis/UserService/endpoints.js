import config from "config"

export const userUrl = `${config.backendUrl}/user`
export const user = (id) => `${userUrl}/${id}`
export const userActivity = (id) => `${userUrl}/${id}/activity`
export const userAverageSessions = (id) => `${userUrl}/${id}/average-sessions`
export const userPerformance = (id) => `${userUrl}/${id}/performance`
