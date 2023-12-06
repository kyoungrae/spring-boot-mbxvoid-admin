package com.mbxvoid.contents;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ContentsServiceImpl implements ContentsService{

   private ContentsRepository contentsRepository;
    public ContentsServiceImpl(ContentsRepository contentsRepository){
        this.contentsRepository = contentsRepository;
    }
    @Override
    public List<ContentsDto> searchContents() throws Exception {
        List<ContentsDto> list = null;
        try {
            list = contentsRepository.findAll();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
    
}
