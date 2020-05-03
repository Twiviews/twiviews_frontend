import React from 'react';
import {
    Card
  } from 'reactstrap';
import 'simplebar';
import 'simplebar/dist/simplebar.css';
import './WritePost.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const WritePost = () => {
    return (
        <Card className="write-post" >
                    <Form>
                        <FormGroup>
                            <br/>
                            <i className="userIconInner fa fa-user shadow-lg"></i>
                            <br/>
                            <Input type="textarea" name="text" className="text-area-cont" id="exampleText" />
                            <Button className="submit-button">Submit</Button>
                        </FormGroup>
                    </Form>
        </Card>
    )
}


export default WritePost;

