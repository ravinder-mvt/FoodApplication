export default class ApiResponse {
    constructor(status, message, data = null) {
        this.status = status < 400
        this.status = status
        this.message = message,
        this.data = data
    }
}