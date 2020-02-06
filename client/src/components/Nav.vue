<template>
    <nav
        class="max-w-full items-center flex justify-between bg-indigo py-4 px-6"
    >
        <div class="flex">
            <!-- Hamburger Nav -->
            <div class="block lg:hidden mr-4">
                <button
                    class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
                >
                    <svg
                        class="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>

            <!-- App Name -->
            <router-link
                to="/"
                class="text-white mr-6 font-semibold text-xl hover:cursor-pointer sm:hidden md:block"
            >
                VueShare
            </router-link>
        </div>

        <!-- Search Input -->
        <form class="w-full max-w-sm">
            <div
                class="flex items-center border-b border-b-2 border-white py-2"
            >
                <i class="material-icons mr-1 text-white">search</i>
                <input
                    class="appearance-none bg-indigo border-none w-full text-white mr-3 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Search Posts"
                    aria-label="Search Posts"
                />
            </div>
        </form>

        <!-- Menu Links -->
        <div
            class="sm:hidden md:block lg:flex lg:items-center lg:w-auto text-sm"
        >
            <router-link
                v-for="navMenuLink in navMenuLinks"
                :key="navMenuLink.name"
                :to="navMenuLink.url"
                class="lg:inline-block lg:mt-0 text-white hover:text-white mr-6"
            >
                <i
                    class="material-icons mr-1 align-middle sm:hidden md:hidden lg:inline-block"
                    >{{ navMenuLink.icon }}</i
                >
                {{ navMenuLink.name }}
            </router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Nav",
    data: function() {
        return {
            navMenuLinks: [
                {
                    name: "Posts",
                    url: "/posts",
                    icon: "chat"
                },
                {
                    name: "Sign In",
                    url: "/sign-in",
                    icon: "lock_open"
                },
                {
                    name: "Sign Up",
                    url: "/sign-up",
                    icon: "create"
                }
            ]
        };
    }
};
</script>
