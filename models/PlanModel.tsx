export default interface PlanModel {
  id: string;
  name: string;
  icon: string;
  price: {
    monthly: number;
    yearly: number;
  };
}
