const API_URL = "http://127.0.0.1:8000/planes";

export const getPlanes = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/`, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    });

    if (!response.ok) throw new Error("Error al cargar los planes");
    return await response.json();
};

export const registrarPlan = async (datos: any) => {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(datos),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al registrar el plan");
    }

    return await response.json();
};

export const deletePlan = async (id: number) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
    });
    return await response.json();
};
