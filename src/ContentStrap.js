import React, {Component} from "react";
import { Button, Card, CardImg, CardText, CardBody,
        CardTitle, CardSubtitle } from "reactstrap";
import './ContentStrap.css'

class ContentStrap extends Component {
    constructor(prop){
        super(prop);
        this.state ={ 
                naviDb : [
                    {
                        src: 'https://img.cjthemarket.com/images/file/product/391/20220103164518423.jpg?RS=550x550',
                        title : '햇반',
                    },
                    {
                        src: 'https://img.cjthemarket.com/images/file/product/391/20220103164518423.jpg?RS=550x550',
                        title : '솥반',
                    },
                    {
                        src: 'https://img.cjthemarket.com/images/file/product/391/20220103164518423.jpg?RS=550x550',
                        title : '스팸',
                    },

                ],

        }
    }

    render(){
        return(
            <div className="container">
                <div id='gallery' className="row">
                    <Card className="col-4 border-0">
                        <CardImg tom width="100%" src={this.state.naviDb[0].src} alt="Card image cap" className="m-auto" />
                        <CardBody>
                            <CardTitle>{this.state.naviDb[0].title}</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText classNAme="text-truncate">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card className="col-4 border-0">
                        <CardImg tom width="100%" src={this.state.naviDb[0].src} alt="Card image cap" className="m-auto" />
                        <CardBody>
                            <CardTitle>{this.state.naviDb[0].title}</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText classNAme="text-truncate">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card className="col-4 border-0">
                        <CardImg tom width="100%" src={this.state.naviDb[0].src} alt="Card image cap" className="m-auto" />
                        <CardBody>
                            <CardTitle>{this.state.naviDb[0].title}</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText classNAme="text-truncate">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}

export default ContentStrap;