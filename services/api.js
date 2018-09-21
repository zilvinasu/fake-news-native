const API_ROOT = "http://localhost:3001";

export const requests = {
  get(url) {
    const config = {
      headers: { "Content-Type": "application/json" },
      method: "GET"
    };
    return fetch(`${API_ROOT}${url}`, config)
      .then(response => response.json())
      .catch(error => {
        console.error(`GET[${url}] failed =\n`, error);
      });
  },
  post(url, body) {
    const config = {
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
      method: "POST"
    };
    return fetch(`${API_ROOT}${url}`, config)
      .then(response => response.json())
      .catch(error => {
        console.error(`POST[${url} failed =\n`, error);
      });
  }
};

export const Posts = {
  add({ title, body }) {
    return requests.post("/posts", { title, body });
  },
  all() {
    return requests.get("/posts?_sort=id&_order=desc");
  },
  findOne(id) {
    return requests.get(`/posts/${id}`);
  }
};
