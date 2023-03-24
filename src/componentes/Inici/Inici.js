import Card from 'react-bootstrap/Card';





const Inici = () => {
    return(
        <div className="container my-5">
            <h2>La Endocrinologia</h2>
            <hr/>
            
            <Card className='mb-3'>
                <Card.Header>
                    <h2>¿Que es la endocrinologia?</h2>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p>
                            La endocrinología es una ciencia que estudia la función y la alteración del sistema hormonal.
                            Las hormonas son sustancias químicas que permiten la comunicación de una célula con otra, y se encargan
                            de regular, estimular y corregir actividades fundamentales en nuestro organismo; como lo es crecimiento,
                            desarrollo, metabolismo, reproducción y nuestra adaptación al medio ambiente.
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mb-3'>
                <Card.Header>
                    <h2>¿Que hace un endocrino?</h2>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p>
                            El endocrinólogo es el médico especialista en tratar las patologías de origen hormonal y metabolismo.
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mb-3'>
                <Card.Header>
                    <h2>Patologias hormonales</h2>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p>
                            Las patologías de origen endocrino es un conjunto de características de síntomas y signos que presenta
                            una persona en cuanto alteraciones de esta índole Crecimiento y desarrollo, Metabolismo (engloba
                            digestión, eliminación, respiración, circulación sanguínea y mantenimiento de la temperatura corporal),
                            la Función sexual, la Reproducción y el Estado de ánimo
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Inici