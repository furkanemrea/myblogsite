import ReactStars from "react-rating-stars-component";
import React, { Component } from "react";
import Pagination from "react-js-pagination";
import "../../src/App.css";

class Teknoloji extends Component {
  constructor(props) {
    super();
    this.state = {
      alans: [
        { beceri: "Asp.net MVC", derece: 3 },
        { beceri: "React JS", derece: 3 },
        { beceri: "Microsoft SQL Server", derece: 4 },
        { beceri: "Windows Form Application", derece: 4.5 },
        { beceri: "LinQ", derece: 4 },
        { beceri: "Entity Framework Database First", derece: 4 },
        { beceri: "LinQ", derece: 4 },
        { beceri: "Asp.Net Web Api", derece: 3.5 },
        { beceri: "Entity Framewrok Code First", derece: 3 },
        { beceri: "Bootstrap-Reactstrap", derece: 3 },
        { beceri: "HTML", derece: 4 },
        { beceri: "CSS", derece: 3 },
        { beceri: "MySQL", derece: 2 },
        { beceri: "ADO . NET", derece: 4 },
        { beceri: "GİT", derece: 4 },
        { beceri: "OOP", derece: 2 },
        { beceri: "Devexpress Component", derece: 2 },
        { beceri: "Xamarin", derece: 1.5 },
      ],
      activePage: 10,
    };
  }
  handlePageChange(pageNumber) {
    if (pageNumber === 1) {
      this.setState({
        activePage: pageNumber,
        alans: this.state.alans,
      });
    }
    if (pageNumber === 2) {
      this.setState({
        activePage: pageNumber,
        alans: this.state.alans,
      });
    }
    if (pageNumber === 3) {
      this.setState({
        activePage: pageNumber,
        alans: this.state.alans,
      });
    }
    if (pageNumber === 4) {
      this.setState({
        activePage: pageNumber,
        alans: this.state.alans,
      });
    }
  }
  render() {
    return (
      <div>
        <table className="table table-bordered mt-3">
          <thead>
            <tr style={{ backgroundColor: "#576574" }}>
              <th style={{ color: "white" }}>Hakim Olduğum Teknolojiler</th>
              <th style={{ color: "white" }}>Derece </th>
            </tr>
          </thead>
          <tbody>
            {this.state.alans.map((alan) => (
              <tr>
                <td>{alan.beceri}</td>
                <td>
                  <ReactStars
                    count={5}
                    size={24}
                    value={alan.derece}
                    isHalf={true}
                    activeColor="#ffd700"
                  />
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
        <div style={{margin:"0px auto"}}>
          <Pagination
            prevPageText="Geri"
            linkClass="page-link"
            itemClass="page-item"
            activePage={this.state.activePage}
            itemsCountPerPage={10}
            totalItemsCount={this.state.alans.length}
            onChange={this.handlePageChange.bind(this)}
            nextPageText="İleri"
          />
        </div>
      </div>
    );
  }
}

export default Teknoloji;
