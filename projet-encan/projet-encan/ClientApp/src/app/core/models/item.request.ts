export class Item {
  constructor(
    public Id: number | null = null,
    public Name: string | null = null,
    public ImagePath: string | null = null,
    public Price: number | null = null,
    public ConditionP: boolean | null = null,
    public Description: string | null = null,
    public Available: boolean | null = null,
    public VendorName: string | null = null,
    public VendorEmail: string | null = null,
    public VendorPhone: string | null = null,
    public PostingYear: Date | null = null
  ){}
}
