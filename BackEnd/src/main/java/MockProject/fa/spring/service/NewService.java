package MockProject.fa.spring.service;


import java.util.List;
//import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import MockProject.fa.spring.Entity.New;
import MockProject.fa.spring.Repository.NewRepository;

@Service
public class NewService {

	@Autowired
	private NewRepository newRepository;
	
	public List<New> getNew(){
		return newRepository.findAll();
	}
	
//	public void addNew(NewEntity newEntity) {
//	    Optional<NewEntity> newByTitle = newRepository.findByTitleNew(newEntity.getTitleNew());
//		if (newByTitle.isPresent()) {
//			throw new IllegalStateException("Title taken");
//		}
//		newRepository.save(newEntity);
//	}
	
	

	public void deleteNew(Long newId) {
			boolean exists = newRepository.existsById(newId);
			if (!exists) {
				throw new IllegalStateException("New with ID " + newId + "does not exists");
			}
			newRepository.deleteById(newId);
	}

	
	public ServiceResult findById(Long id) {
	    ServiceResult result = new ServiceResult();
	    New _new = newRepository.findById(id).orElse(null);
	    result.setData(_new);
	    return result;
	  }
	 
}
