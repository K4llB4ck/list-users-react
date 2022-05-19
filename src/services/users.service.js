import axios from '../utils/axios';


class Users {

    constructor() {
        this.endPoints = {
            get: "/admin_list_active_users",
            post: "/admin_list_active_users",
            delete: "/customers"
        }
    }

    async createUser(user) {
        try {
            const request = await axios.post(this.endPoints.post, user);
            if (request.status == 201) {
                const data = request.data;
                return data;
            }
        } catch (e) {
            return e.message;
        }
    }

    async getAll() {
        try {
            const request = await axios.get(this.endPoints.get);
           if (request.status == 200) {
                const data = request.data;
                return data;
            }
        } catch (e) {
            throw new Error({
                status: e.response.status,
                message: e.message
            });
        }
    }
    async delete(userId) {
        try {
            const request = await axios.delete(`${this.endPoints.delete}/${userId}`);
            if (request.status == 200) {
                const data = request.data;
                return data;
            }
        } catch (e) {
            return e.message;
        }
    }
}

export default new Users();

