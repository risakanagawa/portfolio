export default class Contact extends React.Component {

  render() {
    return (

                <section id="contact" className="section theme-2nd-bg">
                  <div className="container">
                    <div className="heading cl p-b-60px text-center">
                      <h4 className="color-white">
                        <span className="theme-2nd-bg opacity9" />Contact Me
                      </h4>
                    </div>

                    <div className="row text-center">
                      <div className="col-12 col-md-4 m-t-15px m-b-15px">
                        <h5 className="font-16 font-w-700 color-white">
                          My Location
                        </h5>
                        <div className="color-white font-14 opacity8">
                          301 The Greenhouse, Courtten
                          <br />
                          London, E2 8DY.
                        </div>
                      </div>

                      <div className="col-12 col-md-4 m-t-15px m-b-15px">
                        <h5 className="font-16 font-w-700 color-white ">My Email</h5>
                        <div className="color-white font-14 opacity8">
                          infor@yourdomain.com
                          <br />
                          support@yourdomain.com
                        </div>
                      </div>
                      <div className="col-12 col-md-4 m-t-15px m-b-15px">
                        <h5 className="font-16 font-w-700 color-white">My Numbers</h5>
                        <div className="color-white font-14 opacity8">
                          +01 (989) 000 5665
                          <br />
                          +01 (989) 000 5665
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
  );
}
}
