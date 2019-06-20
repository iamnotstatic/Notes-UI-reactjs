import React, { Component } from 'react';

class Profile extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="profile">
                <div className="pro-file">
                    <h1>Static</h1>
                </div>
                <div className="pro-cont">
                <section>
                    <h3>Eat, Sleep, Code, reapeat</h3><hr></hr>
                    <p>W3Schools is optimized for learning, testing,
                         and training. Examples might be simplified to
                          improve reading and basic understanding. Tutorials,
                           references, and examples are constantly reviewed to
                            avoid errors, but we cannot warrant full correctness 
                            of all content. While using this site, you agree to have
                             read and accepted our terms of use, cookie and privacy policy.
                              Copyright 1999-2016 by Refsnes Data. All Rights Reserved.</p>
                    </section>
                    <section>
                    <h3>Eat, Sleep, Code, reapeat</h3><hr></hr>
                    <p>W3Schools is optimized for learning, testing,
                         and training. Examples might be simplified to
                          improve reading and basic understanding. Tutorials,
                           references, and examples are constantly reviewed to
                            avoid errors, but we cannot warrant full correctness 
                            of all content. While using this site, you agree to have
                             read and accepted our terms of use, cookie and privacy policy.
                              Copyright 1999-2016 by Refsnes Data. All Rights Reserved.</p>
                    </section>
                    <section>
                    <h3>Eat, Sleep, Code, reapeat</h3><hr></hr>
                    <p>W3Schools is optimized for learning, testing,
                         and training. Examples might be simplified to
                          improve reading and basic understanding. Tutorials,
                           references, and examples are constantly reviewed to
                            avoid errors, but we cannot warrant full correctness 
                            of all content. While using this site, you agree to have
                             read and accepted our terms of use, cookie and privacy policy.
                              Copyright 1999-2016 by Refsnes Data. All Rights Reserved.</p>
                    </section>
                    <section>
                        <form className="form">
                            <h2>Create Note</h2>
                            <input type="text" name="subject" className="input" placeholder="Note subject"/>
                            <textarea name="note" placeholder="Note">

                            </textarea>
                            <input type="submit"  value="Create" className="btn" />
                        </form>
                    </section>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}

export default Profile;