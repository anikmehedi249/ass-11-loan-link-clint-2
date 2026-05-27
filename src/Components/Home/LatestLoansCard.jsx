import React from 'react';
import { TbListDetails } from "react-icons/tb";
import { Link } from 'react-router';


const LatestLoansCard = ({loan}) => {
    const {image, title, shortDescription,maxLoanLimit} = loan || []

    const convert=(number)=>{

    if(number>=1000000)
        return ( number/1000000 ) + 'M'

    else if(number>=1000)
        return (number/1000) + 'K'

    return number
    }

    return (
        <div>
           <div className="card bg-base-100 w-9/12 shadow-sm border border-gray-300 hover:scale-105
         transition ease-in-out rounded-xl p-3 flex flex-col">
  <figure>
    <img
      src={image}
      alt={title}  className='h-70 w-full rounded-xl' />
  </figure>
  <div className="card-body flex flex-col grow space-y-2">
    <h2 className="card-title text-2xl text-primary min-h-16">
      {title}
    </h2>
    <p className='text-gray-600 grow'>{shortDescription}</p>
    <div className=" flex items-center justify-between gap-2 my-2 flex-wrap">
      <p className='font-bold'>
      Max Loan Limit:
      </p>
     <p className="badge badge-secondary font-semibold text-xs sm:text-sm ">
       {convert(maxLoanLimit)} TK
      </p> 
     </div>
    
    <div className="card-actions justify-center mt-10 mb-5">
      <Link to={`/loan-details/${loan._id}`} className='btn btn-secondary w-full rounded-lg cursor-pointer transition-all duration-300 ease-in-out  hover: shadow-lg hover:scale-[1.02] hover:bg-green-300'><span><TbListDetails /></span>View Details</Link>
    </div>
  </div>
</div>
      <link />
        </div>
    );
};

export default LatestLoansCard;