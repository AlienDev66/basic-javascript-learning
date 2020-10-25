import api from "./api";

class App {
  constructor() {
    this.repositories = [];
    this.formEl = document.getElementById("repo-form");
    this.inputEl = document.querySelector("input[name=repository]");
    this.listEl = document.getElementById("repo-list");

    this.registerHandler();
  }

  registerHandler() {
    this.formEl.onsubmit = (event) => this.addRepository(event);
  }

  setLoading(loading = true) {
    if (loading) {
      let loadingEl = document.createElement("span");
      loadingEl.appendChild(document.createTextNode("Carregando..."));
      loadingEl.setAttribute("id", "loading");

      this.formEl.appendChild(loadingEl);
    } else {
      document.getElementById("loading").remove();
    }
  }

  async addRepository(event) {
    event.preventDefault();
    const repoInput = this.inputEl.value;

    if (repoInput === 0) return;

    this.setLoading();

    const response = await api.get(`/repos/${repoInput}`);

    console.log(response);
    try {
      const {
        name,
        description,
        owner: { avatar_url },
        html_url,
      } = response.data;

      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url,
      });

      this.inputEl.value = "";

      this.render();
    } catch (err) {
      alert("O repositório não existe...");
    }
    this.setLoading(false);
  }
  render() {
    this.listEl.innerHTML = "";

    this.repositories.forEach((repo) => {
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", repo.avatar_url);

      let titleEl = document.createElement("strong");
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement("p");
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement("a");
      linkEl.setAttribute("target", "_blank");
      linkEl.setAttribute("href", repo.html_url);
      linkEl.appendChild(document.createTextNode("Acessar"));

      let listItemEl = document.createElement("li");
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl);
    });
  }
}

new App();
