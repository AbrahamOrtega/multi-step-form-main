export default interface AddonsModel {
  id: string;
  title: string;
  description: string;
  price: { monthly: number; yearly: number };
}
