import { toast } from '@zerodevx/svelte-toast';

function toastSuccess(message) {

    return toast.push(message, {
        duration: 3000,
        theme: {
            '--toastColor': 'mintcream',
            '--toastBackground': 'rgba(72,187,120,0.9)',
            '--toastBarBackground': '#2F855A'
        },
        placement: 'top-center'
    });
}

function toastError(message) {
    return toast.push(message, {
        duration: 3000,
        theme: {
            '--toastColor': 'mintcream',
            '--toastBackground': 'rgba(255,99,71,0.9)',
            '--toastBarBackground': '#fff'
        },
        placement: 'top-center'
    });
}

export { toastSuccess, toastError };