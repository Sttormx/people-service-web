import API from "./api";

class UserService
{
    getCollaborators()
    {
        return API.get('/collaborator')
    };

    getCollaborator(id: number)
    {
        return API.get(`/collaborator/${id}`)
    };

    doAddCollaborator(data: any)
    {
        return API.post('/collaborator', data);
    };

    doUpdateCollaborator(id: number, data: any)
    {
        return API.put(`/collaborator/${id}`, data);
    };

    doDeleteCollaborator(id: number)
    {
        return API.delete(`/collaborator/${id}`);
    };
}

export default new UserService();