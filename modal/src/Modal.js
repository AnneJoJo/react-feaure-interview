export default function Modal({isOpen ,children}) {

	return(

			
			<div className={`${ isOpen ? 'modal-show' : 'modal-hide'}`}>

					{children}			

			</div>
			
			

		)

}
