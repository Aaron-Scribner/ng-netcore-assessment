using Platform.Domain;

namespace PizzaPie.Domain
{
    public class OrderDeliveredCommand : IDomainCommand<bool>
    {
        public Order Order { get; init;  }
    }
}