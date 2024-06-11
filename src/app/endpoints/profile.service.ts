import BaseApi from "../baseApi";

class Profile extends BaseApi {
  constructor() {
    super({ suffix: "apiaccount/school-project" });
  }

  updateProfile(
    userId: string,
    data: {
      name: string;
      phone: string;
      password: string;
      university: string;
      major: string;
      job: string;
      email: string;
    }
  ) {
    return this.httpService.patch(`/user/update/${userId}`, data);
  }

  getProfile() {
    return this.httpService.get(`/user/profile`);
  }

  getEvents() {
    return this.httpService.get(`/events`);
  }

  joinEvent(eventId: string, data: { email: string }) {
    return this.httpService.patch(`/event/subscribe/${eventId}`, data);
  }

  addEvent(data: {
    eventTitle: string;
    eventDes: string;
    capacity: number;
    users: string[];
    image: string;
  }) {
    return this.httpService.patch(`/manager/add-event`, data);
  }

  getSignupRequests() {
    return this.httpService.get(`/manager/user-singup-requests`);
  }

  acceptRequest(userId: string) {
    return this.httpService.patch(
      `/manager/user-singup-requests/accept/${userId}`
    );
  }

  getArticles() {
    return this.httpService.get(`/articles`);
  }

  getUsers() {
    return this.httpService.get(`/manager/users`);
  }

  getMessages() {
    return this.httpService.get(`/messages`);
  }

  sendMessage(data: { message: string; reciever: string; subject: string }) {
    return this.httpService.patch(`/message/send`, data);
  }

  addArticle(data: { title: string; bodyText: string; sources: string[] }) {
    return this.httpService.patch(`/manager/publish/article`, data);
  }
}

const profileServices = new Profile();
export default profileServices;
