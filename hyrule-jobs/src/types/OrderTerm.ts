import Job from '@/types/Job'

type OrderTerm = keyof Omit<Job, 'id'>

export default OrderTerm