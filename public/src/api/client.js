const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:3000/api/v1/' : '/api/v1/';

const toast = document.getElementById("toast");
function toast(message, type = "info") {
  toast.textContent = message;

  toast.className = "toast";

  toast.classList.add(type);
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

async function fetchApi(endpoint, options = {}) {
    const url = `${API_URL}${endpoint}`;
    const config = {
        method: options.method || 'GET',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
    };

    try {
        const response = await fetch(url, config);
        if (!response.ok) {
            const textoError = await response.json().catch(() => null);
            throw new Error(textoError?.message || `Algo salió mal: ${response.status}`);
            toast(textoError?.message || `Algo salió mal: ${response.status}`, "error");
        }
        if (response.status === 204) return null;
        toast("Operación exitosa", "success");
        return await response.json().catch(() => null);
    } catch (error) {
        console.error(error.message);
        toast(error.message, "error");
        throw error;
    }
}

export async function apiRequest(endpoint, options = {}) {
    return await fetchApi(endpoint, options);
}