interface Model {
  id: number
  uuid: string
  created_at?: string
  updated_at?: string
  deleted_at?: string
}

interface User extends Model {
  name: string
  email: string
  password?: string
  signed_in_at?: string
  email_verified_at?: string
}
