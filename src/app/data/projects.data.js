export const projectsData = [
    {
        id: 1,
        title: "Job finder web",
        vercel: "https://job-finder-app.vercel.app/#home",
        git: "https://github.com/vlcoscar8/Job_finder_app",
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
                        name: "Document.createElement('div')",
                        resume: "Create the cointainer where the data will be stored with this method",
                    },
                    {
                        name: "Function.map(el => 'content'",
                        resume: "Use the map function to iterate and return the content into an array",
                    },
                    {
                        name: "Array.join('')",
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
                        name: "Async - Await",
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
                        name: "Classlist.add('className')",
                        resume: "Add a class style to an element",
                    },
                    {
                        name: "Array.forEach(el =>  el.remove())",
                        resume: "Remove each element if a condition is true",
                    },
                    {
                        name: "CallbackFunctions",
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
                        name: "New Class(...)",
                        resume: "Create a new class in an OOP method and pass info to the constructor",
                    },
                    {
                        name: "Array.push(...)",
                        resume: "Set some info to an array to manage later in other function",
                    },
                    {
                        name: "Element.setAttribute('attr', 'value')",
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
        git: "https://github.com/vlcoscar8/Sneakers-ecommerce",
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
                        name: "Private HTTPClient",
                        resume: "Insert into the constructor a service to use the calls to the api",
                    },
                    {
                        name: "This.http.get('endpoint')",
                        resume: "Use the http service instead of fetch",
                    },
                    {
                        name: "Environment.apiUrl",
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
                        name: "Pipe",
                        resume: "Use a pipe to filter data before to pass to a component",
                    },
                    {
                        name: "Private PaginationService",
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
                        name: "Product: IProduct",
                        resume: "Use the interfaces from typescript to evaluate if the data used is correct",
                    },
                    {
                        name: "Value.next(...)",
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
                        name: "ForkJoin(ObservableArray)",
                        resume: "Return an array of observables values with forkJoin function, is similar to promise all in JS",
                    },
                    {
                        name: "Subscribe(...)",
                        resume: "Get the data once the promise is finished and set into the value",
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
        git: "https://github.com/vlcoscar8/Recipes_App",
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
                        name: "E.target.files",
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
                        name: "Async - Await",
                        resume: "Use async await method to fetch the endpoint and convert into data to use in the page",
                    },
                    {
                        name: "Method: POST",
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
                        name: "ForEach",
                        resume: "Iterate through the list to add the html into the container for each element",
                    },
                    {
                        name: "Template string",
                        resume: "Use the template string to add the variables into the html in a easy way",
                    },
                    {
                        name: "InsertAdjacentHTML('where', 'what')",
                        resume: "Use this function to insert the whole html created previously into the element selected",
                    },
                ],
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1654101147/RecipeAssets/FoodCategory/recipe_code-03_rtxea3.png",
            },
        ],
    },
    {
        id: 4,
        title: "React Foro",
        vercel: "https://react-foro.netlify.app",
        git: "https://github.com/vlcoscar8/REACT--Foro_social",
        description:
            "A React Foro about several topics where the users can create topics, comments and replies. And also there is a personal profile page where the user can change coins to update the avatar profile with a system of incentives where the user earn 25 coins when a topic is created and 5 coins where other user comments on your topic",
        stack: [
            {
                name: "React",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
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
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1656059866/RecipeAssets/FoodCategory/home_uqcx5u.png",
            },
        ],
        code: [
            {
                description: "A picture about the structure of the project",
                functions: [
                    {
                        name: "State folder",
                        resume: "Where the conxtext and the redux is managed",
                    },
                    {
                        name: "Custom hooks",
                        resume: "A folder where all the reusable functions are stored",
                    },
                    {
                        name: "Components",
                        resume: "The core components and the shared components like buttons or header",
                    },
                ],
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1656060129/RecipeAssets/FoodCategory/home_flf0am.png",
            },
            {
                description:
                    "The reducer created to manage the user logged information",
                functions: [
                    {
                        name: "Initial state",
                        resume: "The user information is getted from the local storage if exist",
                    },
                    {
                        name: "Reducer",
                        resume: "A switch function where it helps to manage the different kind of actions dispached to the state",
                    },
                    {
                        name: "Actions",
                        resume: "The type and the payload helps to know with function of the switch function should be done",
                    },
                ],
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1656060378/RecipeAssets/FoodCategory/home_w4kqkp.png",
            },
            {
                description:
                    "The Home component with useEffect and useState and some filters functions",
                functions: [
                    {
                        name: "UseEffect",
                        resume: "The useEffect set the family list that comes from the redux custom hook called 'useFamilyList'",
                    },
                    {
                        name: "Filter by name",
                        resume: "A function to filter the list by the name that the user writes in an input",
                    },
                    {
                        name: "Sort and reset functions",
                        resume: "A functions to sort the list by quantity of topics and a reset function to set the initial state",
                    },
                ],
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1656061052/RecipeAssets/FoodCategory/home_bngcrs.png",
            },
            {
                description:
                    "Formik component implemented when the user can create a topic",
                functions: [
                    {
                        name: "Initial values",
                        resume: "The form needs an initial values stored in a constant",
                    },
                    {
                        name: "Field tag",
                        resume: "The Formik uses a field tag instead of input, the select options input is created with the list coming from the api",
                    },
                    {
                        name: "Formik input file",
                        resume: "To upload an image is used a function to handle the file and create a form data to send to the api",
                    },
                ],
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1656061159/RecipeAssets/FoodCategory/home_rzkpod.png",
            },
            {
                description: "Unit Testing with Jest",
                functions: [
                    {
                        name: "Testing using context",
                        resume: "A provider with a mock values is included in the test",
                    },
                    {
                        name: "Query by test id",
                        resume: "To get the info from the screen rendered is used the 'queryByTestId' and checked with 'toBeTruthy'",
                    },
                    {
                        name: "Testing Context",
                        resume: "If the user has been logged the username should print on the header, thats why the context is needed to be included",
                    },
                ],
                img: "https://res.cloudinary.com/oscar-perez/image/upload/v1656061607/RecipeAssets/FoodCategory/home_qrwi1m.png",
            },
        ],
    },
];
