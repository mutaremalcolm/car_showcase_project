"use client";

import { CustomButton } from "@/components";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext, setLimit}: ShowMoreProps) => {
    
    const HandleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;   
    
    setLimit(newLimit);

    }

  return (
    <div className="w-full flex-center gap-5 mt-10">
        {!isNext && (
             <CustomButton 
                  title='Show More'
                  btnType='button'
                  containerStyles='bg-primary-blue rounded-full text-white'
                  handleClick={HandleNavigation} isDisabled={false}              />
        )}
    </div>
  )
}

export default ShowMore