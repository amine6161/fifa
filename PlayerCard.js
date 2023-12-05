import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types'; 
const PlayerCard=({el})=>{
    return(
        <div className='play'>

                {/* <Card style={{ width: '18rem',height:'18rem', backgroundImage:`url(${el.URL})` ,backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
                
                <Card.Body>
                    <Card.Title style={{color:'#5552ff'}}>{el.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{color:'#5552ff'}}>Nationalité : {el.nationality}</Card.Subtitle>
                    <Card.Text style={{color:'#5552ff'}}>
                        age : {el.age} ans
                        <br/>
                        Equipe actuel : {el.team}, son numéro {el.jerseyNumber}
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                </Card>
             */}
            <Card style={{ width: '18rem' }}>
            <Card.Img style={{width :'286px' ,height:'270px'}} variant="top" src={el.URL} />
            <Card.Body>
                <Card.Title>{el.name}</Card.Title>

            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Nationalité : {el.nationality}</ListGroup.Item>
                <ListGroup.Item>age : {el.age} ans</ListGroup.Item>
                <ListGroup.Item>Equipe actuel : {el.team}, son numéro {el.jerseyNumber}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>
        </div>
    )
}
PlayerCard.defaultProps={
    el :    {
        name : "Ons Jabeur",
        team : "Tunis",
        nationality : "Tunisienne",
        jerseyNumber : 1,
        age : 29,
        URL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWV-zsp8qJqhhv4IaKpPfZwcLATkYGhjEnoEU-c1oE19pExLBwTb2VdJFpKFODdIvctL0&usqp=CAU"


    }
}

PlayerCard.propTypes = {
     el: PropTypes.object
}
export default PlayerCard