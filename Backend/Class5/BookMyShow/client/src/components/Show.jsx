import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Show = () => {
    const [showDetail, setShowDetail] = useState({});
    const { showId } = useParams();

    const getShowDetail = async () => {
        const response = await fetch(`http://localhost:5050/api/show/${showId}`);
        const detail = await response.json();
        setShowDetail(detail);
    }

    useEffect(() => {
        getShowDetail();
    }, []);

    return (
        <div className="flex flex-col">
            {
                showDetail?.seats?.map(seatCategory => (
                    <>
                        <div className="text-regular text-slate-500  mt-4  mb-2">
                            {seatCategory.category}-Rs{seatCategory.price}
                        </div>
                        <div className="flex flex-col">
                            {
                                seatCategory.arrangements?.map(row => (
                                    <div className="flex">
                                        <button className="bg-transparent text-slate-500 py-2 px-4">A</button>
                                        {
                                            row.map(col => (
                                                <button className={(col.status !== "BOOKED" ? "hover:bg-blue-700 hover:text-white bg-transparent" : "bg-slate-500 text-slate-200 disabled ") + ` border border-slate-500 text-slate-500 py-2 px-4 m-2`}>{col.seatNumber}</button>
                                            ))
                                        }
                                        
                                    </div>
                                ))
                            }
                        </div>
                    </>
                ))
            }
        </div>
    )
}

export default Show;