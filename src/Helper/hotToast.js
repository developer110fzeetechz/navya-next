import toast from "react-hot-toast";

export const customToast = (comp, message) => {
    toast.custom((t) => (
        <div
            className={`${t.visible ? 'animate-enter' : 'animate-leave'
                }  bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
            <div className="flex-1 w-0 p-4">
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 pt-0.5">
                        <img
                            className="h-2 w-2 rounded-full"
                            src={'/assets/logo.jpg'}
                            alt=""
                        />
                    </div>
                    <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">
                            {comp}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                            {message}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex border-l border-gray-200">
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    ❌
                </button>
            </div>
        </div>
    ))
}

export const successToast = (message) => {
    toast.success( message);
}
export const errorToast =(message)=>{
    toast.error(message);
}