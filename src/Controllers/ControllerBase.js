
class ControllerBase
{
  constructor(ServiceEntity)
  {
    this.Entity = ServiceEntity;
  }

  async GetAll(req,res)
  {
    try
    {
      const entity = await this.Entity.GetAll();
      return res.status(200).json(entity);
    }catch (error)
    {
      ///
    }
  }

  async Post(req,res)
  {
    const entity = await this.Entity.Post(req);
    return res.status(201).json(entity);
  }

  async Put(req,res)
  {
    await this.Entity.Put(req);
    return res.status(201).json({message : 'Up-to-date person'});
  }

  async Delete(req,res)
  {
    await this.Entity.Delete(req);
    return res.status(201).json({message : 'Deleted Person'});
  }
}

module.exports = ControllerBase;