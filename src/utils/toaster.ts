import { toast } from "sonner";

const successToast = (message: string) => {
  toast.success(message, {
    style: {
      color: "#a55e3f",
      background: "#f8f8f8",
      fontSize: "14px",
      fontStyle: "italic",
    },
  });
};

const errorToast = (message: string) => {
  toast.error(message, {
    style: {
      color: "#FF0000",
      background: "#f8f8f8",
      fontSize: "14px",
      fontStyle: "italic",
    },
  });
};

export { successToast, errorToast };
