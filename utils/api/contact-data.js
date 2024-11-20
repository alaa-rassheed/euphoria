// contactOperations.js
import toast from "react-hot-toast";
import * as Yup from "yup";

export const handleSubmit = async (values, { resetForm }) => {
    // Use toast.promise to handle the API call
    return toast.promise(
        fetch("https://api.euphoriagroup.com.eg/api/save/contact-us", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then(async (response) => {
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || "Failed to submit. Please check your input.");
                }
                const responseData = await response.json();
                resetForm();
                return responseData.success || "Your message was successfully sent!";
            })
            .catch((error) => {
                throw new Error(error.message || "An error occurred. Please try again later.");
            }),
        {
            loading: "Submitting...",
            success: (data) => data,
            error: (error) => error.message,
        }
    );
};

export const validationSchema = Yup.object({
    name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .max(100, "Name cannot exceed 100 characters")
        .required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string()
        .matches(/^(010|011|012|015)\d{8}$/, "Invalid Egyptian Phone number")
        .required("Phone number is required"),
    service_id: Yup.string().required("Please select a service."),
    message: Yup.string().min(10, "Message must be at least 10 characters"),
});
