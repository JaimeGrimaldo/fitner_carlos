interface Props {
    onClose: () => void;
}
export default function ClicPerfil({ onClose }: Props) {
    return (
        <div className="shadow-lg bg-white p-4 rounded-lg flex flex-col gap-4 w-full -mt-6 w-full ">
            <h1 className="hover:font-bold">Editar perfil</h1>
            <h2 className="hover:font-bold">Cerrar sesión</h2>
            <h2 onClick={onClose} className="hover:font-bold">
                Cerrar
            </h2>
        </div>
    );
}
