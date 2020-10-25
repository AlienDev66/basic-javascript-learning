class App {
  constructor() {
    this.repositories = [];
    this.formEl = document.getElementById("repo-form");

    this.registerHandler();
  }

  registerHandler() {
    this.formEl.onsubmit = (event) => this.addRepository(event);
  }

  addRepository(event) {
    event.preventDefault();

    this.repositories.push({
      name: "alienshikdaia.com",
      description: "O mundo roda como roda",
      avatar_url:
        'https://avatars1.githubusercontent.com/u/59874434?s=400&u=7f9f2e1809bb5e4f30cbe000a56b65290c317616&v=4"',
      html_url: "https://github.com/AlienDev66/InviteYou-frontend",
    });

    console.log(this.repositories);
  }
}

new App();
