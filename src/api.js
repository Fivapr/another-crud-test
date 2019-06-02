import axios from "axios";

function isFormData(val) {
  return typeof FormData !== "undefined" && val instanceof FormData;
}

const defaultOptions = {
  baseURL: "https://uxcandy.com/~shapoval/test-task-backend/v2",
  headers: { "Content-Type": "multipart/form-data" }
};

class Api {
  constructor(options = {}) {
    this.client = options.client || axios.create(defaultOptions);
    this.token = options.token;
    this.developer = options.developer || "Stepan123";

    this.client.interceptors.request.use(
      config => {
        const newConfig = {
          params: {},
          ...config
        };

        if (this.developer) {
          newConfig.params.developer = this.developer;
        }

        if (this.token && !isFormData(newConfig.data)) {
          const form = new FormData();
          form.append("token", this.token);
          newConfig.data = form;
        }

        if (this.token && isFormData(newConfig.data)) {
          newConfig.data.append("token", this.token);
        }

        return newConfig;
      },
      e => Promise.reject(e)
    );
  }

  login = async ({ username, password }) => {
    const form = new FormData();

    form.append("username", username);
    form.append("password", password);

    const { data = {} } = await this.client.post("/login", form);

    if (data.status === "ok") {
      this.token = data.message.token;
    }
  };

  logout = () => {
    this.token = null;
  };

  // sort_field (id | username | email | status) - поле, по которому выполняется сортировка
  // sort_direction (asc | desc) - направление сортировки
  // page - номер страницы для пагинации
  getTasks = ({ sortField, sortDirection, page } = {}) => {
    return this.client("/", {
      params: {
        sort_field: sortField,
        sort_direction: sortDirection,
        page
      }
    }).then(({ data }) => data);
  };

  createTask = async ({ username, email, text }) => {
    const form = new FormData();

    form.append("username", username);
    form.append("email", email);
    form.append("text", text);

    const { data = {} } = await this.client.post("/create", form);

    return data;
  };

  editTask = async ({ id, status, text }) => {
    const form = new FormData();

    form.append("status ", status);
    form.append("text", text);

    const { data = {} } = await this.client.post(`/edit/${id}/`, form);

    return data;
  };
}

const api = new Api();

export default api;
