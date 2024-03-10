
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
      res.status(500).json({message : 'Ocorreu um Erro do Lado Do Servidor', Erro : error});
    }
  }

  async GetId(req,res)
  {
    try
    {
      const { id } = req.params;
      const entity = await this.Entity.GetId(Number(id));
      if(entity != null)
      {
        return res.status(200).json(entity);
      }
      return res.status(404).json({message : 'Id não Encontrado'});
      
    } catch(error)
    {
      res.status(500).json({message : 'Ocorreu um Erro do Lado Do Servidor', Erro : error});

    }
  }

  async Post(req,res)
  {
    try
    {
      const entity = await this.Entity.Post();
      return res.status(201).json(entity);
    }catch (error)
    {
      res.status(500).json({message : 'Ocorreu um Erro do Lado Do Servidor', Erro : error});

    }
  }

  async Put(req,res)
  {
    try
    {
      await this.Entity.Put(req);
      return res.status(201).json({message : 'Up-to-date person'});
    } catch(error)
    {
      res.status(500).json({message : 'Ocorreu um Erro do Lado Do Servidor', Erro : error});

    }
  }

  async Delete(req,res)
  {
    try
    {
      await this.Entity.Delete(req);
      return res.status(201).json({message : 'Deleted Person'});
    } catch (error)
    {
      res.status(500).json({message : 'Ocorreu um Erro do Lado Do Servidor', Erro : error});

    }
  }
}

module.exports = ControllerBase;