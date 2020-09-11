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
        { beceri: "Linq", derece: 4 },
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
              <tr key={alan.beceri}>
                <td>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-bookmark-star"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
                    />
                    <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z" />
                  </svg>
                  {"  "}
                  {alan.beceri}
                </td>
                <td>{"  "}
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
        <div style={{ margin: "0px auto" }}>
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
