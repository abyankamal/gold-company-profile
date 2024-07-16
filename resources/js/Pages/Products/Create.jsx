import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";

export default function ProductCreate({ auth }) {
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            title: "",
            description: "",
            image: null,
        });

    function handleChange(event) {
        data.image = event.target.files[0];
        if (data.image) {
            imagePreviewUrl.value = URL.createObjectURL(data.image);
        }
    }

    const submit = (e) => {
        e.preventDefault();
        post(route("products.store"), {
            forceFormData: true, // Ensures the form data is sent as multipart/form-data
        });
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Users
                </h2>
            }
        >
            <Head title="Add Product" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="mt-8 flow-root">
                                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                        <section className="max-w-xl">
                                            <header>
                                                <h2 className="text-lg font-medium text-gray-900">
                                                    Add Product
                                                </h2>

                                                <p className="mt-1 text-sm text-gray-600">
                                                    Add Product Below
                                                </p>
                                            </header>

                                            <form
                                                onSubmit={submit}
                                                className="mt-6 space-y-6"
                                            >
                                                <div>
                                                    <InputLabel
                                                        htmlFor="name"
                                                        value="Title"
                                                    />

                                                    <TextInput
                                                        id="title"
                                                        className="mt-1 block w-full"
                                                        value={data.title}
                                                        onChange={(e) =>
                                                            setData(
                                                                "title",
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                        isFocused
                                                        autoComplete="name"
                                                    />

                                                    <InputError
                                                        className="mt-2"
                                                        message={errors.title}
                                                    />
                                                </div>

                                                <div>
                                                    <InputLabel
                                                        htmlFor="password"
                                                        value="Description"
                                                    />

                                                    <TextInput
                                                        id="description"
                                                        value={data.description}
                                                        onChange={(e) =>
                                                            setData(
                                                                "description",
                                                                e.target.value
                                                            )
                                                        }
                                                        type="text"
                                                        className="mt-1 block w-full"
                                                        autoComplete="new-description"
                                                    />

                                                    <InputError
                                                        message={
                                                            errors.description
                                                        }
                                                        className="mt-2"
                                                    />
                                                </div>

                                                <div>
                                                    <InputLabel
                                                        htmlFor="image"
                                                        value="Image"
                                                    />

                                                    <TextInput
                                                        id="image"
                                                        value={data.image}
                                                        onChange={(e) =>
                                                            setData(
                                                                "image",
                                                                e.target
                                                                    .files[0]
                                                            )
                                                        }
                                                        type="file"
                                                        className="mt-1 block w-full"
                                                        autoComplete="new-password"
                                                    />

                                                    <InputError
                                                        message={errors.image}
                                                        className="mt-2"
                                                    />
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <PrimaryButton
                                                        disabled={processing}
                                                    >
                                                        Save
                                                    </PrimaryButton>

                                                    <Transition
                                                        show={
                                                            recentlySuccessful
                                                        }
                                                        enter="transition ease-in-out"
                                                        enterFrom="opacity-0"
                                                        leave="transition ease-in-out"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <p className="text-sm text-gray-600">
                                                            Saved.
                                                        </p>
                                                    </Transition>
                                                </div>
                                            </form>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
