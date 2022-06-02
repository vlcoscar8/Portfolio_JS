export const projectsData = [
    {
        id: 1,
        title: "Job finder web",
        vercel: "https://job-finder-app.vercel.app/#home",
        description:
            "A web where you can find the last job offers from Remotive Api. With a filter options, pagination and list of favourites jobs. This is the first project I've done with Javascript calling a public Api and also I've practised Object Oriented Programming",
        stack: [
            {
                name: "Javascript",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
            },
            {
                name: "Sass",
                img: "https://cdn.iconscout.com/icon/free/png-256/sass-226054.png",
            },
        ],
        pictures: [
            {
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1654077750/RecipeAssets/FoodCategory/fob_finder_app_olkx9y.png",
            },
            {
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1654101019/RecipeAssets/FoodCategory/fob_finder_app_01_murdjk.png",
            },
            {
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1654101019/RecipeAssets/FoodCategory/fob_finder_app_02_t2rxfr.png",
            },
        ],
        code: [
            {
                description:
                    "The code below describe the way how the data is printed on the view",
                functions: [
                    {
                        name: "document.createElement('div')",
                        resume: "Create the cointainer where the data will be stored with this method",
                    },
                    {
                        name: "function.map(el => 'content'",
                        resume: "Use the map function to iterate and return the content into an array",
                    },
                    {
                        name: "array.join('')",
                        resume: "Use the join function to unify all the html created with map previously to print to the view",
                    },
                ],
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1654101018/RecipeAssets/FoodCategory/fob_finder_app_code01_gfzyzg.png",
            },
            {
                description:
                    "How the data from the Remotive Api is getted and used",
                functions: [
                    {
                        name: "async - await",
                        resume: "Use async - await method to fetch to an endpoint in this case with a limit query",
                    },
                ],
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1654101018/RecipeAssets/FoodCategory/fob_finder_app_code02_bxo1em.png",
            },
            {
                description:
                    "In this case, the code below describe how the favourite list is managed",
                functions: [
                    {
                        name: "classlist.add('className')",
                        resume: "Add a class style to an element",
                    },
                    {
                        name: "array.forEach(el =>  el.remove())",
                        resume: "Remove each element if a condition is true",
                    },
                    {
                        name: "callbackFunctions",
                        resume: "Manage the data and send to an other function to do something else",
                    },
                ],
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1654101018/RecipeAssets/FoodCategory/fob_finder_app_code03_ggleaq.png",
            },
            {
                description:
                    "Last picture is about the OOP application to print the companies data",
                functions: [
                    {
                        name: "new Class()",
                        resume: "Create a new class in an OOP method and pass info to the constructor",
                    },
                    {
                        name: "array.push()",
                        resume: "Set some info to an array to manage later in other function",
                    },
                    {
                        name: "element.setAttribute('attr', 'value')",
                        resume: "Set an atributte to an lement with an specific value to use later",
                    },
                ],
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1654101018/RecipeAssets/FoodCategory/fob_finder_app_code04_epa8fa.png",
            },
        ],
    },
    {
        id: 2,
        title: "Sneakers e-commerce",
        vercel: "https://sneakers-ecommerce-nine.vercel.app/",
        description:
            "An e-commerce about sneakers with product-cart, personal account view and a commentary box feature. This project is an start-to-end project with not only frontend development, but also backend with an APi to manage all the data used in the application.",
        stack: [
            {
                name: "Angular",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png",
            },
            {
                name: "Sass",
                img: "https://cdn.iconscout.com/icon/free/png-256/sass-226054.png",
            },
            {
                name: "NodeJs",
                img: "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png",
            },
            {
                name: "Mongo",
                img: "https://img.icons8.com/color/452/mongodb.png",
            },
        ],
        pictures: [
            {
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1654077754/RecipeAssets/FoodCategory/sneakers_ecommerce_lla1yx.png",
            },
            {
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1654101075/RecipeAssets/FoodCategory/sneakers_ecommerce_01_b7b6jc.png",
            },
            {
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1654101075/RecipeAssets/FoodCategory/sneakers_ecommerce_02_e1y7k6.png",
            },
        ],
        code: [
            {
                description:
                    "The code below is the product component used in several views of the page",
                functions: [
                    {
                        name: "*ngIf='value'",
                        resume: "Directive used to show the component or not depending on the value is true or false",
                    },
                    {
                        name: "[router-link]=['/route', 'value']",
                        resume: "Use the routerModule to make the routing when the user click on the element",
                    },
                    {
                        name: "[attribute]='value' || attribute={{ value }}",
                        resume: "Use all the manners to declare a value in a html component in Angular",
                    },
                ],
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1654101075/RecipeAssets/FoodCategory/sneakers_ecommerce_code_01_l9pwzt.png",
            },
            {
                description:
                    "The subscribe methods created to manage the information that comes from the api",
                functions: [
                    {
                        name: "private HTTPClient",
                        resume: "Insert into the constructor a service to use the calls to the api",
                    },
                    {
                        name: "this.http.get('endpoint')",
                        resume: "Use the http service instead of fetch",
                    },
                    {
                        name: "environment.apiUrl",
                        resume: "Use the url from the api that is stored in a environment folder",
                    },
                ],
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1654101075/RecipeAssets/FoodCategory/sneakers_ecommerce_code_02_oxa6hk.png",
            },
            {
                description:
                    "The pipes created to manage the list of products and filter by several manners",
                functions: [
                    {
                        name: "pipe",
                        resume: "Use a pipe to filter data before to pass to a component",
                    },
                    {
                        name: "private PaginationService",
                        resume: "Use a service created by my self to set and get the values needed to filter in to the pipe",
                    },
                    {
                        name: "Math.ceil(...)",
                        resume: "Operate with Math function to get the index used in the pipe",
                    },
                ],
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1654101075/RecipeAssets/FoodCategory/sneakers_ecommerce_code_03_g7nixp.png",
            },
            {
                description:
                    "The services created to set and get the data and share with differents components",
                functions: [
                    {
                        name: "ReplaySubject<number>",
                        resume: "Use the method replaySubject to listen all the changes done into the variable and pass it to a other component",
                    },
                    {
                        name: "product: IProduct",
                        resume: "Use the interfaces from typescript to evaluate if the data used is correct",
                    },
                    {
                        name: "value.next(..)",
                        resume: "Send the data to the value through the next function if all it is correct",
                    },
                ],
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1654101075/RecipeAssets/FoodCategory/sneakers_ecommerce_code_04_yfqoa8.png",
            },
            {
                description:
                    "A switch map function to create a promise all with forkjoin to get the list of products that the user has bought",
                functions: [
                    {
                        name: "SwitchMap",
                        resume: "Inside of a pipe use the switchMap to manage the data before subscribe on it",
                    },
                    {
                        name: "forkJoin(ObservableArray)",
                        resume: "Return an array of observables values with forkJoin function, is similar to promise all in JS",
                    },
                    {
                        name: "subscribe(...)",
                        resume: "Get teh data once the promise is finished and set into the value",
                    },
                ],
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1654101075/RecipeAssets/FoodCategory/sneakers_ecommerce_code_05_cid1y9.png",
            },
        ],
    },
    {
        id: 3,
        title: "Recipe social media app",
        vercel: "https://recipes-app-pi-dun.vercel.app/",
        description:
            "A recipe social media web, where the users can create their own recipes and post on the web, a personal account view where the user can update his personal info and also a backend api created with all the endpoints to get/post and delete the info. This project was done to practise the user register flow with JWT",
        stack: [
            {
                name: "Javascript",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
            },
            {
                name: "Sass",
                img: "https://cdn.iconscout.com/icon/free/png-256/sass-226054.png",
            },
            {
                name: "NodeJs",
                img: "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png",
            },
            {
                name: "Mongo",
                img: "https://img.icons8.com/color/452/mongodb.png",
            },
        ],
        pictures: [
            {
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1654086321/RecipeAssets/FoodCategory/recipe_o4yatx.png",
            },
            {
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1654101148/RecipeAssets/FoodCategory/recipe_01_dct6qs.png",
            },
            {
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1654101148/RecipeAssets/FoodCategory/recipe_02_rq6bpf.png",
            },
        ],
        code: [
            {
                description:
                    "A picture about how the form data is managed to update the personal information in the personal account view",
                functions: [
                    {
                        name: "e.target.files",
                        resume: "To obtain the input type file from the form",
                    },
                    {
                        name: "Object.fromEntries(new FormData(e.target))",
                        resume: "Create a field in a formData with the entries of each target",
                    },
                    {
                        name: "FormData.append(...)",
                        resume: "Insert the value into the entrie of the formData created",
                    },
                ],
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1654101147/RecipeAssets/FoodCategory/recipe_code-01_vtclwx.png",
            },
            {
                description:
                    "The code below shows how the data is managed from the frontend to get the data from the backend",
                functions: [
                    {
                        name: "async - await",
                        resume: "Use async await method to fetch the endpoint and convert into data to use in the page",
                    },
                    {
                        name: "method: POST",
                        resume: "Modify the header into the fetch function to post data to the database",
                    },
                    {
                        name: "Authorization: Bearer Token",
                        resume: "Pass the bearer token from the user logged to pass the middleware programmed into the Api",
                    },
                ],
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1654101147/RecipeAssets/FoodCategory/recipe_code-02_dntxmm.png",
            },
            {
                description:
                    "In this case the picture show the code about how the data is printed to the view",
                functions: [
                    {
                        name: "forEach",
                        resume: "Iterate through the list to add the html into the container for each element",
                    },
                    {
                        name: "Template string",
                        resume: "Use the template string to add the variables into the html in a easy way",
                    },
                    {
                        name: "insertAdjacentHTML('where', 'what')",
                        resume: "Use this function to insert the whole html created previously into the element selected",
                    },
                ],
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1654101147/RecipeAssets/FoodCategory/recipe_code-03_rtxea3.png",
            },
        ],
    },
];
