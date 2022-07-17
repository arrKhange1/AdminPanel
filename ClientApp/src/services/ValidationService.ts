import IQuiz from "../@types/AdminPanel/IQuiz";
import IQuizErrorMsg from "../@types/AdminPanel/IQuizErrorMsg";

export class Validator {

    static uploadFormValidate(quiz:IQuiz, filePath:string,
         setErrorMsgs:React.Dispatch<React.SetStateAction<IQuizErrorMsg>>,
          errorMsgs:IQuizErrorMsg): boolean {
        
        const todayDate:string = new Date(Date.now()).toLocaleDateString();
        const dateBegin: number = Date.parse(quiz.dateBegin);
        const dateEnd: number = Date.parse(quiz.dateEnd);
        const fileExtension: string = filePath.split('.')[1];


        let success = true;
        const errors: IQuizErrorMsg = {name: '', dateBegin: '', dateEnd: '', filePath:'', serverError: errorMsgs.serverError};

        if (quiz.name == '') {
            success = false;
            errors.name = 'Название должно содержать хотя бы 1 символ'
        }
        if (dateBegin >= dateEnd) {
            success = false;
            errors.dateBegin = 'Дата начала < Дата окончания';
            errors.dateEnd = 'Дата окончания > Дата начала';
        }
        else {
            const dateBeginDate:string = new Date(dateBegin).toLocaleDateString();
            const dateEndDate:string = new Date(dateEnd).toLocaleDateString();

            if (todayDate !== dateBeginDate) {
                success = false;
                errors.dateBegin = `Выберите сегодняшнюю дату (${todayDate})`;
            }
            if (todayDate !== dateEndDate) {
                success = false;
                errors.dateEnd = `Выберите сегодняшнюю дату (${todayDate})`;
            }
        }
        if (isNaN(dateBegin)) {
            success = false;
            errors.dateBegin = 'Выберите дату';
        }
        if (isNaN(dateEnd)) {
            success = false;
            errors.dateEnd = 'Выберите дату';
        }
        if (fileExtension !== 'xlsx' && fileExtension !== 'xls') {
            success = false;
            errors.filePath = 'Доступные форматы файла - .xlsx и .xls';
        }

        setErrorMsgs(errors);
        return success;

        
    }
}