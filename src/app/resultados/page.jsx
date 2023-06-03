import Image from "next/image"
import pdfLogo from '../../assets/icons8-pdf-40.png'

const resultados = [
    {
        nombre: 'Alexandra',
        fecha: new Date().toLocaleDateString(),
        urlResultado: 'https://drive.google.com/file/d/1LptcLoH_llXIj4WTYGLIRk5jJ4hhs1fo/view?usp=sharing'
    },
    {
        nombre: 'Hernan',
        fecha: new Date().toLocaleDateString(),
        urlResultado: 'https://drive.google.com/file/d/1uvGOzYlPig0ktFuTySSb87Niklxednf2/view?usp=sharing'
    },
    {
        nombre: 'Julian',
        fecha: new Date().toLocaleDateString(),
        urlResultado: 'https://drive.google.com/file/d/1HRaiDNOh5gxh3QyTFJTpZ_W_JrjiEQIj/view?usp=sharing'
    }
]

const Resultados = () => {
    return (
        <>
            <h1 className="heading-primary">Resultados</h1>
            <div>
                <table className="tabla-resultados">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Fecha Prueba</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{resultados[0].nombre}</td>
                            <td>{resultados[0].fecha}</td>
                            <td>
                                <a href={resultados[0].urlResultado} target="_blank">
                                    <Image src={pdfLogo} alt="Logo descargas" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>{resultados[1].nombre}</td>
                            <td>{resultados[1].fecha}</td>
                            <td>
                                <a href={resultados[1].urlResultado} target="_blank">
                                    <Image src={pdfLogo} alt="Logo descargas" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>{resultados[2].nombre}</td>
                            <td>{resultados[2].fecha}</td>
                            <td>
                                <a href={resultados[2].urlResultado} target="_blank">
                                    <Image src={pdfLogo} alt="Logo descargas" />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Resultados