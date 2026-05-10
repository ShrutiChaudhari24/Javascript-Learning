const submitBtn = document.querySelector(".form-card button");

const nameInput = document.querySelectorAll(".form-card input")[0];
const roleInput = document.querySelectorAll(".form-card input")[1];
const bioInput = document.querySelector(".form-card textarea");
const photoInput = document.querySelectorAll(".form-card input")[2];

const cardsContainer = document.querySelector(".cards");

const userManager = {

    users: [],

    init: function () {

        submitBtn.addEventListener(
            "click",
            this.submitForm.bind(this)
        );

    },

    submitForm: function (e) {

        e.preventDefault();

        const name = nameInput.value.trim();
        const role = roleInput.value.trim();
        const bio = bioInput.value.trim();
        const photo = photoInput.value.trim();

        if (
            name === "" ||
            role === "" ||
            bio === "" ||
            photo === ""
        ) {
            alert("Please fill all fields");
            return;
        }

        const user = {
            name,
            role,
            bio,
            photo
        };

        this.addUser(user);

        nameInput.value = "";
        roleInput.value = "";
        bioInput.value = "";
        photoInput.value = "";
    },

    addUser: function (user) {

        this.users.push(user);

        this.renderUsers();

        console.log(this.users);

    },

    renderUsers: function () {

        cardsContainer.innerHTML = "";

        this.users.forEach((user) => {

            const card = document.createElement("div");

            card.classList.add("card");

            card.innerHTML = `
                <img src="${user.photo}">
                <h3>${user.name}</h3>
                <p class="role">${user.role}</p>
                <p>${user.bio}</p>
            `;

            cardsContainer.appendChild(card);

        });

    },

    removeUser: function () {}

};

userManager.init();