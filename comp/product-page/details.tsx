const Details = ({product})=>{
   
    return (
        <div>
            <span className='block text-sm mb-2'>Vendor: <span className='text-gray-color'>{product?.vendor}</span></span>
            <span className='block text-sm mb-2'>Product Type: <span className='text-gray-color'>{product?.productType}</span></span>
            <span className='block text-sm mb-2'>Barcode: <span className='text-gray-color'>123456789</span></span>
            <span className='block text-sm'>Tags: <span className='text-gray-color'>{product?.tags.join(', ')}</span></span>
        </div>
    )
}

export default Details;