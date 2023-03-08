import ReviewForm from "./ReviewForm";
import { Formik } from "formik";
import * as yup from 'yup';
// import useSignIn from "../hooks/useSignIn";
import useCreateReview from "../hooks/useCreateReview";

const initialValues = {
    ownerName: '',
    repoName: '',
    rate: '',
    review: '',
}

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  repoName: yup
    .string()
    .required('Repository name is required'),
  rate: yup
    .number()
    .required('Rating is required')
    .min(0, 'Rating should be between 0 and 100')
    .max(100, 'Rating should be between 0 and 100'),
  review: yup
    .string()
});

const Review = () => {
    // const [signIn] = useSignIn()
    const [createReview] = useCreateReview()

    const onSubmit = async (values) => {
        console.log(values)
        const { ownerName, repoName, rate, review } = values;
        console.log(ownerName)
        console.log(repoName)
        console.log(rate)
        console.log(review)

        try {
          await createReview({ ownerName, repositoryName: repoName, rating: rate, text: review })
        } catch(e) {
          console.log('error', e)
        }
      };
    
      return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
        </Formik>
      );
};

export default Review;