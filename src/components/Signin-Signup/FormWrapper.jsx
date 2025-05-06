import AuthOptions from "./AuthOptions";

const FormWrapper = ({title, onSubmit, formId, children}) => {
  return (
    <div className="w-full h-full flex flex-col justify-center relative">
      <h2 className="text-center font-montserrat text-2xl font-bold text-fresh-1500">
        {title}
      </h2>
      <form
        className="mt-6 w-100 mx-auto"
        onSubmit={onSubmit}
        noValidate
        id={formId}
      >
        {children}
      </form>
      <div>
        <AuthOptions />
      </div>
    </div>
  )
}
export default FormWrapper