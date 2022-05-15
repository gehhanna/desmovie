/* eslint-disable react/jsx-no-comment-textnodes */
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";

function Listing() {

    return (
        <>
            <Pagination />

            <div className="container">
                <div className="row">
                //a cada espaço os card vai mudando até 12 espaços.
                    <div className="col-sm-6" col-lg-4 col-xl-3 mb-3>
                        <MovieCard />
                    </div>
                    <div className="col-sm-6" col-lg-4 col-xl-3 mb-3>
                        <MovieCard />
                    </div>
                    <div className="col-sm-6" col-lg-4 col-xl-3 mb-3>
                        <MovieCard />
                    </div>
                    <div className="col-sm-6" col-lg-4 col-xl-3 mb-3>
                        <MovieCard />
                    </div>
                    <div className="col-sm-6" col-lg-4 col-xl-3 mb-3>
                        <MovieCard />
                    </div>
                </div>
            </div>


        </>
    );
}

export default Listing;